import React from "react";

type ExperimentType = {
  name: string;
  description: string;
};

type BeamlineInfo = {
  name: string;
  experimentTypes: ExperimentType[];
};

type TaskStatus = {
  taskId: string;
  task: string;
  is_complete: boolean;
  is_pending: boolean;
  errors: string[];
};

type TaskCreate = {
  name: string;
  params: Record<string, any>;
};

type TaskData = {
  createFormat: TaskCreate;
  status: TaskStatus | undefined;
};

type ThisSessionTasks = {};

function BeamlinePreview() {
  return <div>BeamlinePreview</div>;
}

export default BeamlinePreview;
