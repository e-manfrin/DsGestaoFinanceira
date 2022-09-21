using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GestaoFinanceira.API.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categoria",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeCatergoria = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categoria", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Contas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Data = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    Descricao = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Valor = table.Column<double>(type: "REAL", nullable: false),
                    CategoriaID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contas_Categoria_CategoriaID",
                        column: x => x.CategoriaID,
                        principalTable: "Categoria",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categoria",
                columns: new[] { "Id", "NomeCatergoria" },
                values: new object[] { 3, "Alimentação" });

            migrationBuilder.InsertData(
                table: "Categoria",
                columns: new[] { "Id", "NomeCatergoria" },
                values: new object[] { 4, "Salário" });

            migrationBuilder.InsertData(
                table: "Contas",
                columns: new[] { "Id", "CategoriaID", "Data", "Descricao", "Valor" },
                values: new object[] { 10, 3, new DateOnly(2022, 7, 5), "Conta de luz", 190.90000000000001 });

            migrationBuilder.InsertData(
                table: "Contas",
                columns: new[] { "Id", "CategoriaID", "Data", "Descricao", "Valor" },
                values: new object[] { 11, 4, new DateOnly(2022, 8, 5), "Conta de Água", 90.599999999999994 });

            migrationBuilder.InsertData(
                table: "Contas",
                columns: new[] { "Id", "CategoriaID", "Data", "Descricao", "Valor" },
                values: new object[] { 12, 4, new DateOnly(2022, 8, 5), "Conta de Gás", 100.09999999999999 });

            migrationBuilder.CreateIndex(
                name: "IX_Contas_CategoriaID",
                table: "Contas",
                column: "CategoriaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contas");

            migrationBuilder.DropTable(
                name: "Categoria");
        }
    }
}
