import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.models';

export const selectGlobalFeatureState =
  createFeatureSelector<GlobalState>('global');

export const selectDocuments = createSelector(
  selectGlobalFeatureState,
  (state) => state.documents
);
