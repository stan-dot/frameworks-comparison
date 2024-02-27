type ExperimentType = {
  name: string;
  description: string;
};


const workerStates = ["IDLE", "RUNNING", "PAUSING", "PAUSED", "HALTING", "STOPPING", "ABORTING", "SUSPENDING", "PANICKED", "UNKNOWN"] as const;

export type WorkerStateType = (typeof workerStates)[number];

export type BeamlineInfo = {
  name: string;
  url: string;
  experimentTypes: ExperimentType[];
  description: string;
  workerState: WorkerStateType;
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
// todo add some caching solution

export type SessionData = {
  startTimestamp: Date;
  tasks: TaskData[];
};
