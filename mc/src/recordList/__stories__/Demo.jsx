/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-09-16 17:06:23
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import { RecordList } from '../../index';
import data from './data';

const Demo = () => {
  const fetchData = async () => {
    try {
      const response = await new Promise(resolve =>
        setTimeout(
          resolve([
            {
              id: 9587443,
              type: 'DEVICE',
              icon: 'door_lock',
              activity: 'NEW DATA',
              time: 1566971574320,
              createBy: 1148468666665324545,
              foreignId: 'f02ec9b9bb182de1486f8a265067ea79',
              delFlag: 0,
              deviceName: 'ZB Door Sensor_42',
              result: null,
              setTime: null,
              userId: null,
              userName: null,
              tenantId: '2',
              orgId: null,
              templateId: null,
              templateName: null,
              templateType: null,
              properties: null,
              homeId: 12572,
              eventType: null,
              roomName: 'Everything else',
            },
            {
              id: 9587444,
              type: 'DEVICE',
              icon: 'door_lock',
              activity: 'NEW DATA 2',
              time: 1566971574320,
              createBy: 1148468666665324545,
              foreignId: 'f02ec9b9bb182de1486f8a265067ea79',
              delFlag: 0,
              deviceName: 'ZB Door Sensor_42',
              result: null,
              setTime: null,
              userId: null,
              userName: null,
              tenantId: '2',
              orgId: null,
              templateId: null,
              templateName: null,
              templateType: null,
              properties: null,
              homeId: 12572,
              eventType: null,
              roomName: 'Everything else',
            },
          ]),
          500,
        ),
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="demo">
      <RecordList data={data} onEndReached={fetchData}></RecordList>
    </div>
  );
};

export default Demo;
