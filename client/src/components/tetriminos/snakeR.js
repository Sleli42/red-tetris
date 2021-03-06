import React from 'react';
import { Layer, Stage, Rect } from 'react-konva';
import constants from '../../constants';
const { block } = constants;


const SnakeR = ({xs, ys}) => 
	<Layer>
            <Rect width={block} height={block}
				x={xs+30} y={ys} fill={'#c17efc'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs+60} y={ys} fill={'#c17efc'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={xs} y={ys+30} fill={'#c17efc'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={xs+30} y={ys+30} fill={'#c17efc'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>

export default SnakeR;