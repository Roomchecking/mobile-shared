import { get } from 'lodash/object';

import {
  taskCompleted,
  taskStarted,
  taskAccepted,
  taskWaiting,
  taskPending,
  taskCancelled,
} from 'rc-mobile-base/lib/styles';

export function taskOptions(task) {
  let options = [];

  if (task.is_completed || task.is_cancelled) {
    return options;
  }

  if (!task.is_claimed) {
    options.push({ label: 'start', status: 'claimed', color: taskCompleted });

    if (!get(task, 'assigned.is_mandatory')) {
      options.push({ label: 'reject', status: 'reject', color: taskCancelled });
    }
  } else if (task.is_claimed && !task.is_started) {
    if (get(task, 'type') === 'action') {
      options.push({ label: 'start', status: 'start', color: taskStarted });
    } else {
      options.push({ label: 'finish', status: 'completed', color: taskCompleted });
    }
  } else if (task.is_started && !task.is_paused) {
    options.push({ label: 'finish', status: 'completed', color: taskCompleted });
    options.push({ label: 'pause', status: 'pause', color: taskWaiting });
  } else if (task.is_paused) {
    options.push({ label: 'resume', status: 'resume', color: taskStarted });
  }

  return options;
}


export function userType(user) {
  if (!user) {
    return '';
  }
  if (user.isAdministrator) {
    return 'Management';
  }
  if (user.isReceptionist) {
    return 'Front Office';
  }
  if (user.isInspector) {
    return 'Housekeeping (Inspector)';
  }
  if (user.isMaintenance) {
    return 'Maintenance';
  }
  if (user.isAttendant) {
    return 'Housekeeping (Attendant)';
  }
  if (user.isRoomRunner) {
    return 'Front Office';
  }
}