import clx from "classnames";
import Spinner from "../../components/spinner";
import styles from "./button.module.scss";

const Button = ({ variant = "primary", ...props }: any) => {
   return (
      <button
         style={props.style}
         id={props.id}
         onClick={(e) => {
            e.target = e.currentTarget;
            return props.onClick ? props.onClick(e) : null;
         }}
         onSubmit={props.onSubmit}
         className={clx(
            styles.btn,
            {
               [styles[`${props.color}`]]: props.color,
               [styles.loading]: props.loading,
               [styles.block]: props.block,
               [styles[`${variant}`]]: variant,
            },
            props.className,
         )}
         disabled={props.disabled}
         type={props.type}
         value={props.value}
         title={props.title}
      >
         <span
            className={clx(styles.content, {
               [styles.loading]: props.loading,
            })}
         >
            {props.icon && <span className={styles["icon-left"]}>{props.icon}</span>}
            {props.children}
         </span>
         {props.loading ? (
            <span
               className={clx(styles.spinner, {
                  [styles[`${props.color}`]]: props.color,
               })}
            >
               <Spinner size={18} />
            </span>
         ) : null}
      </button>
   );
};

export default Button;
