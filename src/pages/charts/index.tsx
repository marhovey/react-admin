import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Gauge, Column, Bar, RingProgress, Liquid, Area } from '@ant-design/charts';
import { Row, Col, Card } from 'antd';
import './index.scss';

export default class Charts extends React.Component<RouteComponentProps> {
  
  gridLayout = {
    xl: {
      span: 6
    },
    lg: {
      span: 12
    },
    md: {
      span: 12
    },
    sm: {
      span: 12
    },
    xs: {
      span: 24
    }
  }

  ringConfig = {
    forceFit: true,
    percent: 0.8,
    width: 300,
    height: 150,
    title: {
      visible: true,
      text: '环状图',
    },
    color: ['#30BF78', '#E8EDF3']
  }

  liquidConfig = {
    title: {
      visible: true,
      text: '水波图',
    },
    min: 0,
    height: 150,
    width: 300,
    forceFit: true,
    max: 10000,
    value: 5639,
  }

  gaugeConfig = {
    title: {
      visible: true,
      text: '仪表盘',
    },
    forceFit: true,
    value: 64,
    min: 0,
    max: 100,
    height: 150,
    range: [0, 25, 50, 75, 100],
    color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],
    statistic: {
      visible: true,
      text: '优',
      color: '#30bf78',
    },
  }

  areaConfig = {
    title: {
      visible: true,
      text: '面积图',
    },
    data: [
      {
        "Date": "2010-01",
        "scales": 1998
      },
      {
        "Date": "2010-02",
        "scales": 1850
      },
      {
        "Date": "2010-03",
        "scales": 1720
      },
      {
        "Date": "2010-04",
        "scales": 1818
      },
      {
        "Date": "2010-05",
        "scales": 1920
      },
      {
        "Date": "2010-06",
        "scales": 1802
      }
    ],
    height: 150,
    forceFit: true,
    xField: 'Date',
    yField: 'scales',
    // xAxis: {
    //   type: 'dateTime',
    //   tickCount: 5,
    // },
  }

  columnConfig = {
    title: {
      visible: true,
      text: '柱状图',
    },
    height: 300,
    forceFit: true,
    data: [
      {
        type: '1',
        sales: 38,
      },
      {
        type: '2',
        sales: 52,
      },
      {
        type: '3',
        sales: 61,
      }
    ],
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    // label: {
    //   visible: true,
    //   position: 'middle',
    // }
  }


  render() {
    return (
      <div className="charts">
        <Row gutter={16}>
          <Col className="gutter-row" {...this.gridLayout}>
            <div>
              <Card>
                <Liquid {...this.liquidConfig} />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" {...this.gridLayout}>
            <div>
              <Card>
                <RingProgress {...this.ringConfig} />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" {...this.gridLayout}>
            <div>
              <Card>
                <Gauge {...this.gaugeConfig} />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" {...this.gridLayout}>
            <div>
              <Card>
                <Area {...this.areaConfig} />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={16}>
            <div>
              <Card>
                <Bar {...this.columnConfig} />
                {/* <Column {...this.columnConfig} /> */}
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <Card>
                {/* <Bar {...this.columnConfig} /> */}
                <Column {...this.columnConfig} />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}