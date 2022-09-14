import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px pink;
    border-radius: 10px;
    margin-top: 70px;
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;

export const InputCheck = styled.label`
    flex: 1;
    margin: 5px;
    font-weight: bold;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid pink;
    border-radius: 5px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin: 0 auto;
    width: 30%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #fd0f88;
    border-radius: 5px;
    background-color: #fd0f88;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: pink;
        color: white;
    }
`;