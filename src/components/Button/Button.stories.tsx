/**
 * Storybook 컴포넌트
 *
 * @author RWB
 * @since 2022.05.13 Fri 18:31:25
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import Button from './Button';

import styles from '../stories.module.scss';

export default {
	component: Button,
	title: 'components/Button'
} as ComponentMeta<typeof Button>;

const cx = classNames.bind(styles);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Sandbox = Template.bind({});
Sandbox.args = {
	children: 'Button'
};

export function All(): JSX.Element {
	return (
		<section className={cx('root')} w>
			<div className={cx('row')}>
				<Button>Button</Button>
				<Button color='basic'>Basic</Button>
				<Button color='submit'>Submit</Button>
				<Button color='info'>Info</Button>
				<Button color='warn'>Warn</Button>
				<Button color='error'>Error</Button>
			</div>

			<div className={cx('row')}>
				<Button disabled>Button</Button>
				<Button color='basic' disabled>
					Basic
				</Button>
				<Button color='submit' disabled>
					Submit
				</Button>
				<Button color='info' disabled>
					Info
				</Button>
				<Button color='warn' disabled>
					Warn
				</Button>
				<Button color='error' disabled>
					Error
				</Button>
			</div>
		</section>
	);
}

export function Color(): JSX.Element {
	return (
		<section className={cx('root')} w>
			<div className={cx('row')}>
				<Button>Button</Button>
				<Button color='basic'>Basic</Button>
				<Button color='submit'>Submit</Button>
				<Button color='info'>Info</Button>
				<Button color='warn'>Warn</Button>
				<Button color='error'>Error</Button>
			</div>
		</section>
	);
}

export function Disabled(): JSX.Element {
	return (
		<section className={cx('root')} w>
			<div className={cx('row')}>
				<Button disabled>Button</Button>
				<Button color='basic' disabled>
					Basic
				</Button>
				<Button color='submit' disabled>
					Submit
				</Button>
				<Button color='info' disabled>
					Info
				</Button>
				<Button color='warn' disabled>
					Warn
				</Button>
				<Button color='error' disabled>
					Error
				</Button>
			</div>
		</section>
	);
}
