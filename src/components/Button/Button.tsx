/**
 * 버튼 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.05.11 Wed 14:53:27
 */

import classNames from 'classnames/bind';
import React from 'react';

import styles from './Button.module.scss';

export type ButtonColorTypes = 'basic' | 'submit' | 'info' | 'warn' | 'error';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	color: ButtonColorTypes;
}

const cx = classNames.bind(styles);

/**
 * 버튼 컴포넌트 반환 메서드
 *
 * @param {ButtonProps} param: ButtonProps 프로퍼티
 *
 * @returns {JSX.Element} JSX
 */
export default function Button({ color = 'basic', className, children, ...props }: ButtonProps): JSX.Element {
	return (
		<button className={cx('button', color, className)} {...props}>
			{children}
		</button>
	);
}
