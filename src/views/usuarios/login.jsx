import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';

export default function Login() {

  const navigate = useNavigate();

  //usuario = state, accesoUsuario = funcion para guaradar el state
  const [usuario, accesoUsuario] = useState({
    email: '',
    password: ''
  });

  //Leer datos del formulario
  const actualizarState = e => {
    //Almacenar lo que escribe el uauario en el state
    accesoUsuario({
      //crear una copia de el state actaul
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const BuscarUsuario = e => {

    e.preventDefault();
    console.log(usuario)
    // enviar peticion
    clienteAxios.post('/users/login', usuario)
      .then(res => {
        console.log(res)
        sessionStorage.setItem('id',res.data.id);
        navigate('/auth/verification');

      })
      .catch(error => {
        console.log(error)
        console.log('Error interno al iniciar sesión')
        Swal.fire({
          icon: 'error',
          title: "Hubo un error",
          text: 'Credenciales incorrectas'

        });
      })

  }


  return (

    <>

      <div className="flex min-h-screen w-1/2 flex-col justify-center px-16 lg:px-24">
        <div className="max-w-lg text-white">
          <h1 className="mb-6 text-6xl font-extrabold leading-[1.1] lg:text-7xl">
            Ingresa con <br /> tu cuenta <br /> ahora!
          </h1>
          <p className="max-w-sm text-sm text-gray-300">
            Comienza a navegar y encuentra los productos que necesitas ahora a un precio más accesible.
          </p>
        </div>
      </div>


      <div className="flex min-h-screen w-1/2 flex-col items-center justify-center px-8">

        <div className="w-full max-w-md">
          <h1 className="mb-14 text-center text-5xl font-bold text-[#1f1f22]">
            Iniciar sesión
          </h1>

          <form onSubmit={BuscarUsuario} className="flex flex-col space-y-5">


            <input
              type="text"
              id="email"
              name="email"
              placeholder="Micorreo@correo.com"
              required
              className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 
              text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
              outline-none transition-all focus:border-gray-300 focus:shadow-md"
              onChange={actualizarState}
            />

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                required
                className="w-full rounded-full border border-gray-100 bg-white py-4 pl-6 pr-14 
                text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                onChange={actualizarState}
              />


              <div className="absolute right-5 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer 
              items-center justify-center opacity-40 transition-opacity hover:opacity-70">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 
                  14C10.5 15.933 12.067 17.5 14 17.5Z" fill="#C7C7C7" />
                  <path d="M26.8428 13.0484C25.3958 10.8106 23.5184 8.90969 21.414 7.5507C19.0859 6.0457 16.5156 5.25 
                  13.9814 5.25C11.6561 5.25 9.3696 5.91445 7.18538 7.22477C4.95796 8.56078 2.93999 10.5126 1.18726 13.0255C0.98939
                   13.3095 0.880416 13.6459 0.874184 13.9919C0.867952 14.338 0.964743 14.6781 1.15226 14.9691C2.59655 17.2293 4.45538 
                   19.133 6.52694 20.4734C8.85937 21.9844 11.3695 22.75 13.9814 22.75C16.5359 22.75 19.1116 21.9609 21.4298 20.4684C23.5331 
                   19.1138 25.4067 17.2058 26.8483 14.9494C27.0293 14.6652 27.125 14.3351 27.1241 13.9981C27.1231 13.6612 27.0255 13.3316 
                   26.8428 13.0484ZM14 19.25C12.9616 19.25 11.9466 18.9421 11.0832 18.3652C10.2199 17.7883 9.54698 16.9684 9.14962 
                   16.0091C8.75226 15.0498 8.6483 13.9942 8.85087 12.9758C9.05344 11.9574 9.55346 11.0219 10.2877 10.2877C11.0219 
                   9.55346 11.9574 9.05345 12.9758 8.85088C13.9942 8.64831 15.0498 8.75227 16.0091 9.14963C16.9684 9.54699 17.7883 
                   10.2199 18.3652 11.0833C18.9421 11.9466 19.25 12.9616 19.25 14C19.2484 15.3919 18.6948 16.7263 17.7105 17.7106C16.7263 
                   18.6948 15.3919 19.2484 14 19.25Z" fill="#C7C7C7" />
                </svg>

              </div>
            </div>


            <div className="flex justify-center pt-1">
              <label
                htmlFor="contraseñaOlvidada"
                className="cursor-pointer text-xs font-semibold text-[#5a8ec9] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </label>
            </div>


            <button
              type="submit"
              className=" flex justify-center mt-4 w-full rounded-full bg-[#fae568] py-4 font-bold 
              text-[#1f1f22] shadow-[0_4px_15px_rgba(250,229,104,0.3)] transition-colors hover:bg-[#f0dc59]"
            >
              Ingresar
            </button>


            <div className="mt-8 text-center text-xs text-gray-600">
              <label htmlFor="cuenta">¿No tienes cuenta? </label>
              <Link
                to="/auth/register"
                className="cursor-pointer font-extrabold text-[#1f1f22] hover:underline"
              >
                Regístrate
              </Link>
            </div>

          </form>
        </div>
      </div>




    </>
  )
}


