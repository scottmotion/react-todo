import { UniqueIdentifier } from '@dnd-kit/core';

export type TodoType = {
  id: UniqueIdentifier;
  title: string;
  isCompleted: boolean;
};
