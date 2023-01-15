import styles from '../styles/Button.module.css'  // css style module 

// Button Component , this component is used every place where is a button 
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
