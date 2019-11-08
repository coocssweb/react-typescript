/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-10-15 10:23:59
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { WingBlank, WhiteSpace, Stepper, Step, StepLabel, StepContent, Box, Button } from '../../index';

const Demo = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = React.useCallback(() => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  }, [activeStep, setActiveStep]);

  const handlePrev = React.useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  }, [activeStep, setActiveStep]);

  return (
    <div className="demo">
      <div className="demo-title">垂直步骤条</div>
      <Box margin={[32]}>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>下载</StepLabel>
            <StepContent>StepContent</StepContent>
          </Step>
          <Step>
            <StepLabel>安装</StepLabel>
            <StepContent>StepContent</StepContent>
          </Step>
          <Step>
            <StepLabel>打开</StepLabel>
            <StepContent>StepContent</StepContent>
          </Step>
        </Stepper>
      </Box>

      <div className="demo-title">水平步骤条</div>
      <Box margin={[32]}>
        <Stepper activeStep={activeStep} direction="horizontal">
          <Step>
            <StepLabel>下载</StepLabel>
          </Step>
          <Step>
            <StepLabel>安装</StepLabel>
          </Step>
          <Step>
            <StepLabel>打开</StepLabel>
          </Step>
        </Stepper>
      </Box>

      <div className="demo-title">纯文本步骤条</div>
      <Box margin={[32]}>
        <Stepper activeStep={activeStep} direction="horizontal" alternativeLabel>
          <Step>
            <StepLabel>下载</StepLabel>
          </Step>
          <Step>
            <StepLabel>安装</StepLabel>
          </Step>
          <Step>
            <StepLabel>打开</StepLabel>
          </Step>
        </Stepper>
      </Box>

      <div className="demo-title">操作</div>
      <WhiteSpace spacing={8}></WhiteSpace>
      <WingBlank spacing={16}>
        <Button onClick={handleNext}>Next</Button>
        <WhiteSpace spacing={8}></WhiteSpace>
        <Button onClick={handlePrev}>Prev</Button>
      </WingBlank>
      <WhiteSpace spacing={16}></WhiteSpace>
    </div>
  );
};

export default Demo;
