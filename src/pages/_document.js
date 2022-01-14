import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta
            name="description"
            content="Hola, me llamo Adrian (Sin Acento) y este es mi blog / portfolio. Soy barista, escritor y programador."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather&family=Work+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            data-website-id="71827f57-63cd-4666-8e83-897f2ba3b094"
            src="https://umami.adrianayala.mx/umami.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
