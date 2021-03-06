import React from 'react';
import { Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { FEATURES } from '../../constants/features';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import { theme } from '../../styles/theme';

const Grid = styled(FlexContainer)`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr;
  grid-template-rows: 0.2fr 0.2fr 0.2fr;
  gap: 0px 0px;
`;

const FeaturesGrid = () => {
  const [width] = useWindowSize();

  return (
    <Grid
      className="w-100 align-fs justify-fs"
      desktopStyle={{ paddingLeft: 138 }}
      tabletStyle={{ display: 'flex', flexDirection: 'column', padding: '0px 48px' }}
      mobileStyle={{ display: 'flex', flexDirection: 'column', padding: '0px 24px' }}
    >
      {Object.values(FEATURES).map((item, index) => (
        <React.Fragment key={index}>
          <FlexContainer
            key={index}
            gap={32}
            className="column"
            desktopStyle={{
              height: 340,
              minWidth: 400,
              padding: '72px 24px',
              borderBottom: index < Object.values(FEATURES).length - 2 && '1px solid #FFFFFF60',
              borderRight: index % 2 === 0 && '1px solid #FFFFFF60',
            }}
            tabletStyle={{ padding: '24px 0px' }}
            mobileStyle={{ padding: '24px 0px' }}
          >
            {item.icon}
            <Label fontFamily="syncopate" fontSize={20} customColor={item.color}>
              {item.title}
            </Label>
            <Label fontSize={12}>{item.description}</Label>
          </FlexContainer>
          {width < theme.mediaQueries.desktopPixel && index !== Object.values(FEATURES).length - 1 && (
            <Divider horizontal style={{ mixBlendMode: 'overlay', backgroundColor: '#FFFFFF', height: 1, width: '100%' }} />
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default FeaturesGrid;
