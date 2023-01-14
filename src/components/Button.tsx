import styles from '../styles/Button.module.css'

export const Button = ({text, Icon, onClick,className="btn"}:{text?:string,Icon?:any, onClick?:VoidFunction, className?:string}) => {
  return (
    <div>
        <button onClick={onClick} className={styles[className]}>
            {
                text && text || Icon && <Icon/>
            }
        </button>
    </div>
  )
}
