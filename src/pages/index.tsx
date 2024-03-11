'use client'
import Head from "next/head";
import Image from "next/image";
import { PT_Sans } from "next/font/google";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import {z} from 'zod'


export default function Home() {

  const webSchema = z.string().url().catch('https://weareleadgrowth.com')
  const linkedinSchema = z.string().url().catch('https://linkedin.com')
  const searchParams = useSearchParams()

  const companyName = searchParams.get('companyName')
  const meetingDate = searchParams.get('meetingDate')
  const website = searchParams.get('website')
  const linkedinCompany = searchParams.get('linkedinCompany')


  return (
    <>
      <Head>
        <title>{`Dossier ${companyName??"Nombre de empresa"}`}</title>
        <meta name="description" content="Lead Growth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Dossier</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins&display=swap" rel="stylesheet" />

      </Head>

      <main className="dossier">
        <div className="membrete"></div>
        <div className="company-data">
          <div className="company-data-top">
            <div className="company-data-top-left">
              <div className="company">{companyName??"Nombre de empresa"}</div>
              <div className="time">{meetingDate??"DD/MM/YYYY ##:##pm"}</div>
            </div>
            <div className="company-data-top-right">
              <Link className="website" href={webSchema.parse(website)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

                  <path fill="#ffffff" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg> Sitio Web
              </Link>
              <Link className="linkedin-company" href={linkedinSchema.parse(linkedinCompany)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                  <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg> Linkedin Empresa
              </Link>
            </div>
          </div>
          <div className="company-info">
            <div className="company-title-wrapper">
              <div>Empresa</div>
              <div className="company-title-line"></div>
            </div>
            <div className="firmographic">
              <div className="firmo-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">

                  <path fill="#003282" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg> bloque 1
              </div>
              <div className="firmo-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

                  <path fill="#003282" d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
                </svg> bloque 1
              </div>
              <div className="firmo-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                  <path fill="#003278" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg> bloque 1
              </div>
              <div className="firmo-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">

                  <path fill="#003278" d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z" />
                </svg> bloque 1
              </div>
            </div>
            <div className="company-description">
              <span>Description de la cuenta</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ipsum in est rhoncus feugiat vel eu purus. Ut congue enim eget dictum semper. Vivamus in eros quam. Ut mi eros, egestas et nisi ut, elementum sagittis magna. Sed turpis nulla, ornare vitae placerat sed, lobortis nec ipsum. Cras molestie et libero a vestibulum. Praesent feugiat convallis sem vitae lacinia. Pellentesque pulvinar sem nec urna rhoncus dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id lacus non ex aliquam elementum et id magna.
            </div>
          </div>
        </div>
        <div className="prospect-data">
          <div className="prospect-data-top">
            <div className="company-data-top-left">
              <div className="prospect-name">Juan Perez Miraló Sánchez</div>
              <div className="role"> Gerente de Tecnología de Filia </div>
            </div>
            <div className="prospect-data-top-right">
              <div className="linkedin-prospect">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                  <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg> Linkedin Prospecto
              </div>
            </div>
          </div>
          <div className="prospect-info">
            <div className="contact-info">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

                  <path fill="#003278" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg> bloque 1
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

                  <path fill="#003278" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg> bloque 1
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                  <path fill="#003278" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg> bloque 1
              </div>
            </div>
            <div className="prospect-description">
              <span>Contexto</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ipsum in est rhoncus feugiat vel eu purus. Ut congue enim eget dictum semper. Vivamus in eros quam. Ut mi eros, egestas et nisi ut, elementum sagittis magna. Sed turpis nulla, ornare vitae placerat sed, lobortis nec ipsum. Cras molestie et libero a vestibulum. Praesent feugiat convallis sem vitae lacinia. Pellentesque pulvinar sem nec urna rhoncus dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id lacus non ex aliquam elementum et id magna. <span></span>
              <p className="sm-txt">
                <span>Asistentes:</span> isi ut, elementum sagittis magna. Sed turpis nulla, ornare vitae placerat sed, lobortis nec ipsum.
              </p>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
