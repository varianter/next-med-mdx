import styles from './SiteLayout.module.css';

export const SiteLayout = ({ children }) => {
    return (
        <div className={styles.site}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}