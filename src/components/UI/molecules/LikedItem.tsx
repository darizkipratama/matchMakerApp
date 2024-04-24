import React from 'react';
import styled from 'styled-components';

import { Flex, Heading, Text, Thumbnail } from '../atoms';

const Details = styled.div`
	margin-left: 15px;
`;

function LikedItem({ name, thumbnail, desc }) {
	return (
		<Flex>
			<Thumbnail>{thumbnail}</Thumbnail>
			<Details>
				<Heading>{name}</Heading>
				<Text>{desc}</Text>
			</Details>
		</Flex>
	);
}

export default LikedItem;