import Image from 'next/image';

export default function FooterEscarac() {
  return(
    <>
      <footer style={{
        backgroundColor: "white",
        padding: "1rem 0"
      }}>
        <a
          href="https://escarac.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="center"
        >
          <p className="normal-text">Desarrollado por{' '}</p>
          <span className="center-image">
            <Image src="/escarac.png" alt="Escarac" width={150} height={70} />
          </span>
        </a>
        <p className="center little-text">
          Francisco Marqués s/n
          <br />
          <br />
          Col. San Juan Bosco, C.P.76807 San Juan del Río, Qro. México.
          <br />
          <br />
          Tel. 01 (427) 273 0729.
        </p>
      </footer>
    </>
  )
}