import classNames from "classnames"
import React, { useMemo } from "react"
import "./Banner.scss"
interface BannerProps {
	title: string
	desc?: string
	img: string
	color: string
	background: string
}
export const Banner: React.FC<BannerProps> = (props: BannerProps) => {
	const bannerStyle = useMemo(() => {
		return {
			background: props.background,
			color: props.color,
		}
	}, [props.background, props.color])

	return (
		<div
			className={classNames({
				"banner-wrapper": true,
			})}
			style={bannerStyle}>
			<div className='banner-info'>
				<div className='title'>{props.title}</div>
				<div className='desc'>{props.desc}</div>
			</div>
			<img className='img' src={props.img} alt='' />
		</div>
	)
}
