import Image from 'next/image';
import CheckboxInput from './checkBoxInput';
import PasswordInput from './passwordInput';
import EmailInput from './emailInput';
import { useState } from 'react';
import { useRouter } from 'next/router';

async function loginUser(userData) {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message) || 'Valami probléma lépett fel';
  }
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    try {
      await loginUser({
        email: email,
        password: password,
      });
      router.replace('/home');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex min-h-[80vh] flex-1 flex-col justify-center items-center px-6 py-12 mx-auto lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/images/Budapest.png"
            alt="An image of budapest website"
            width={75}
            height={50}
            loading="eager"
          />
          <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-white">
            Bejelentkezés
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm bg-white px-6 py-6">
          <form className="space-y-6" onSubmit={submitHandler}>
            <EmailInput
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div>
              <PasswordInput
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <CheckboxInput label="Emlékezzen rám" />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[--color-button-main] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Bejelentkezés
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
