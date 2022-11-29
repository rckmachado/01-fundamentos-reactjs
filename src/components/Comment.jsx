import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/rckmachado.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndtime}>
                            <strong>Rick Machado</strong>
                            <time title="14 de Julho às 18:30" dateTime="2022-07-14">Cerca de 1h atrás</time>
                        </div>

                    <button title="Deletar comentário">
                        <Trash size={20} />
                    </button>
                    </header>

                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </div>
            </div>

            <footer>
                Aplaudir
            </footer>
        </div>
    )
}