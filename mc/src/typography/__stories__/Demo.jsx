/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import { Typography, Box, WhiteSpace } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">主题字体</div>
      <div className="demo-box">
        <Box margin={[20]}>
          <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <WhiteSpace spacing={4} />
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Box>
      </div>

      <div className="demo-title">自定义</div>
      <div className="demo-box">
        <Typography variant="h1" color="#ff0000" textAlign="center">
          带颜色居中
        </Typography>
      </div>
    </div>
  );
};

export default Demo;
