import { animate, motion } from 'framer-motion'
import { FC, useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import { FADE_IN } from '@/utils/animation/fade'

interface IAnimatedCounter {
	to: number
}

const AnimatedCounter: FC<IAnimatedCounter> = ({ to }) => {
	const nodeRef = useRef<HTMLSpanElement>(null)
	const [inViewRef, inView] = useInView()

	const from = to * 0.2

	useEffect(() => {
		if (!inView) return

		const node = nodeRef.current

		const controls = animate(from, to, {
			duration: 2.65,
			delay: 0.3,
			onUpdate(value) {
				if (node) node.textContent = Math.round(value).toLocaleString()
			}
		})

		return () => controls.stop()
	}, [from, to, inView])

	const setRefs = useCallback(
		(node: HTMLSpanElement) => {
			if (nodeRef) {
				// @ts-ignore
				nodeRef.current = node
			}
			inViewRef(node)
		},
		[inViewRef]
	)

	return <motion.span {...FADE_IN} ref={setRefs} />
}

export default AnimatedCounter
