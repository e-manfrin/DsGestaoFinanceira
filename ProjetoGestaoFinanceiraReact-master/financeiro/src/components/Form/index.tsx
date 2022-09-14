import React, { useCallback, useState } from 'react';
import * as C from './styles';

interface IFormState {
  email: string;
  password: string;
  stayLoggedIn: boolean;
}

const Form = () => {

  const [formState, setFormState] = useState<IFormState>({
    email: '',
    password: '',
    stayLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { email, password } = formState;

      if (!email || !password) {

        window.alert('Preencha todos os campos!');

        setIsLoggedIn(false);

        return;
      }

      setIsLoggedIn(true);
    },
    [formState]
  );
  return (
    <C.Container>
      <div className='container mt-5'>
        <form onSubmit={handleSubmit}>
          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputEmail1' className='htmlForm-label'>Email</label>
              </C.InputTitle>
              <C.Input
                type='email'
                className='form-control'
                id='email'
                name='email'
                required
                value={formState.email}

                onChange={(event) => setFormState({
                  ...formState,
                  email: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>
          <C.InputLabel>
            <div className='mb-3'>
              <C.InputTitle>
                <label htmlFor='exampleInputPassword1' className='htmlForm-label'>Senha</label>
              </C.InputTitle>
              <C.Input
                type='password'
                className='form-control'
                id='password'
                name='password'
                required
                value={formState.password}

                onChange={(event) => setFormState({
                  ...formState,
                  password: event.currentTarget?.value || '',
                })
                }
              />
            </div>
          </C.InputLabel>
          <C.InputLabel>
            <div className='mb-3 htmlForm-check'>
              <input
                type='checkbox'
                className='htmlForm-check-input'
                id='stayLoggedIn'
                checked={formState.stayLoggedIn}

                onChange={(event) => setFormState({
                  ...formState,
                  stayLoggedIn: !!event.currentTarget?.checked
                })
                }
              />
              <C.InputCheck>
                <label className='form-check-label' htmlFor='exampleCheck1'>Mantenha-me logado</label>
              </C.InputCheck>
            </div>
          </C.InputLabel>
        </form>
      </div>
      <C.Button>Entrar</C.Button>
    </C.Container>
  );
};

export default Form;