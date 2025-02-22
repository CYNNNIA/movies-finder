const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Página No Encontrada</h1>
      <p style={styles.text}>La página que buscas no existe o fue movida.</p>
      <a href='/' style={styles.link}>
        Volver al inicio
      </a>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px'
  },
  title: {
    fontSize: '2.5rem',
    color: '#ff6b6b'
  },
  text: {
    fontSize: '1.2rem',
    margin: '20px 0'
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
    fontSize: '1.1rem'
  }
}

export default NotFound
