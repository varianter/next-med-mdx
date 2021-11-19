import style from './ArticleLayout.module.css';

export const ArticleLayout = ({ title, date }) => ({ children }) =>
    <article className={style.article}>
        <div className={style.title}>{title}</div>
        <div className={style.date}>{date}</div>
        <div className={style.content}>{children}</div>
    </article>