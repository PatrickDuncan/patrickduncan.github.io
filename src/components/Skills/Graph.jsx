import React from 'react';
import {
  VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip,
} from 'victory';

import Content from '../../Content.json';

const BAR_COLOR = Content.colors['300'].cyan;
const HEIGHT = 300;
const WIDTH = 550;
const LABEL_FONT_SIZE = 18;
const TICK_FONT_SIZE = 14;

const dataSort = (a, b) => b.proficiency - a.proficiency;

const Graph = () => (
  <VictoryChart
    desc={Content.skills.graphText.description}
    domainPadding={{ x: 40 }}
    height={HEIGHT}
    padding={{
      top: 50, right: 55, bottom: 50, left: 25,
    }}
    responsive
    width={WIDTH}
  >
    <VictoryBar
      animate={{
        duration: 500,
        easing: 'bounce',
        onLoad: { duration: 500 },
      }}
      data={Content.skills.graphData.sort(dataSort)}
      labelComponent={<VictoryTooltip />}
      style={{ data: { fill: BAR_COLOR } }}
      x="language"
      y="proficiency"
    />
    <VictoryAxis
      label={Content.skills.graphText.xLabel}
      style={{
        axisLabel: { fontSize: LABEL_FONT_SIZE, padding: 30 },
        tickLabels: { fontSize: TICK_FONT_SIZE, padding: 8 },
      }}
    />
    <VictoryAxis
      dependentAxis
      domain={[0, 5]}
      padding={{ bottom: 100 }}
      style={{
        axisLabel: { fontSize: LABEL_FONT_SIZE, padding: 37, paddingBottom: 300 },
        ticks: { stroke: '#000', size: 5 },
        tickLabels: { fontSize: TICK_FONT_SIZE, padding: 3 },
      }}
    />
  </VictoryChart>
);

export default Graph;
