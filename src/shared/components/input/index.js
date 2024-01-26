import React from "react";
import styles from "./input.module.scss";
import classNames from "classnames";
export default function Input({
  label,
  placeholder,
  name,
  value,
  type,
  onChange,
  srcImg,
  altImg,
  PasswordImg,
  Passwordalt,
  togglePasswordVisibility,
  onKeyDown,
  disabled,
  ...props
}) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={!srcImg ? classNames(styles.inputFlex, styles.withOutIcon) : classNames(styles.inputFlex)}>
        {srcImg && (
          <div className={styles.iconAlignment}>
            <img src={srcImg} alt={altImg} />
          </div>
        )}
        {disabled ? (
          <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} disabled {...props} />
        ) : (
          <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} {...props} />
        )}
        {togglePasswordVisibility && (
          <div className={styles.passwordIcon} onClick={togglePasswordVisibility}>
            <img src={PasswordImg} alt={Passwordalt} />
          </div>
        )}
      </div>
    </div>
  );
}
