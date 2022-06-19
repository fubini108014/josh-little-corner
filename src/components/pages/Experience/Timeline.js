import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import StepButton from "@mui/material/StepButton";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import NCCUIcon from "../../../assets/icon/NccuIcon";
import TodayIcon from "@mui/icons-material/Today";
import GshankIcon from "../../../assets/icon/GshankIcon";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const TimelineContainer = styled("div")({
  position: "absolute",
  bottom: 90,
  left: 10,
  width: "98%",
  "& .MuiStep-root:nth-last-of-type(1) button.stepBtn": {
    cursor: "default",
  },
  "& .MuiStep-root button.stepSelected span.MuiStepLabel-iconContainer > div": {
    boxShadow: "inset 0px 0px 6px 1px #e2e2e2e6",
  },
  "& .MuiStepLabel-label": {
    marginTop: "6px !important",
  },
  "@media screen and (max-width: 750px)": {
    left: 0,
    bottom: 15,
    width: "100%",
  },
});

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <NCCUIcon />,
    3: <GshankIcon />,
    4: <VideoLabelIcon />,
    5: <TodayIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["NSYSU", "NCCU", "鉅祥企業", "嘉實資訊", "至今"];

export default function Timeline({ step, onClick = () => {} }) {
  return (
    <TimelineContainer>
      <Stepper
        alternativeLabel
        activeStep={4}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={() => onClick(index)}
              className={`stepBtn ${step === index ? "stepSelected" : ""}`}
              sx={{ p: "12px 8px", m: "-12px -8px" }}
            >
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </TimelineContainer>
  );
}
