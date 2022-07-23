import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com./rckmachado.png" />
                    <div className={styles.authorInfo}>
                        <strong>Rick Machado</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="14 de Julho às 18:30" dateTime="2022-07-14">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
                    <p>Fala galera 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href="#">jane.design/doctorcare</a></p>

                    <p>
                        <a href="#">#novoprojeto</a>{' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>{' '}
                    </p>
               
            </div>
        </article>

    )
}