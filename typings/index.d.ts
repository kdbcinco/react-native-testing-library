import * as React from 'react';
import { ReactTestInstance, ReactTestRendererJSON } from 'react-test-renderer';

export interface GetByAPI {
  getByName: (name: React.ReactType) => ReactTestInstance;
  getByType: (type: React.ComponentType) => ReactTestInstance;
  getByText: (text: string | RegExp) => ReactTestInstance;
  getByProps: (props: Record<string, any>) => ReactTestInstance;
  getByTestId: (testID: string) => ReactTestInstance;
  getAllByName: (name: React.ReactType) => Array<ReactTestInstance>;
  getAllByType: (type: React.ComponentType) => Array<ReactTestInstance>;
  getAllByText: (text: string | RegExp) => Array<ReactTestInstance>;
  getAllByProps: (props: Record<string, any>) => Array<ReactTestInstance>;
}

export interface QueryByAPI {
  queryByName: (name: React.ReactType) => ReactTestInstance | null;
  queryByType: (type: React.ComponentType) => ReactTestInstance | null;
  queryByText: (name: string | RegExp) => ReactTestInstance | null;
  queryByProps: (props: Record<string, any>) => ReactTestInstance | null;
  queryByTestId: (testID: string) => ReactTestInstance | null;
  queryAllByName: (name: React.ReactType) => Array<ReactTestInstance> | [];
  queryAllByType: (type: React.ComponentType) => Array<ReactTestInstance> | [];
  queryAllByText: (text: string | RegExp) => Array<ReactTestInstance> | [];
  queryAllByProps: (
    props: Record<string, any>
  ) => Array<ReactTestInstance> | [];
}

export interface RenderOptions {
  createNodeMock: (element: React.ReactElement<any>) => any;
}

export interface RenderAPI extends GetByAPI, QueryByAPI {
  update(nextElement: React.ReactElement<any>): void;
  unmount(nextElement?: React.ReactElement<any>): void;
  toJSON(): ReactTestRendererJSON | null;
  debug(message?: string): void;
}

export type FireEventFunction = (
  element: ReactTestInstance,
  eventName: string,
  data?: any
) => any;

export type FireEventAPI = FireEventFunction & {
  press: (element: ReactTestInstance) => any;
  changeText: (element: ReactTestInstance, data?: any) => any;
  scroll: (element: ReactTestInstance, data?: any) => any;
};

export type WaitForElementFunction = <T = any>(
  expectation: () => T,
  timeout?: number,
  interval?: number
) => Promise<T>;

export type DebugFunction = (
  instance: ReactTestInstance | React.ReactElement<any>,
  message?: string
) => void;

export type DebugAPI = DebugFunction & {
  shallow: DebugFunction;
  deep: (
    instance: React.ReactElement<any> | ReactTestRendererJSON | null,
    message?: string
  ) => void;
};

export declare const render: (
  component: React.ReactElement<any>,
  options?: RenderOptions
) => RenderAPI;
export declare const shallow: <P = {}>(
  instance: ReactTestInstance | React.ReactElement<P>
) => { output: React.ReactElement<P> };
export declare const flushMicrotasksQueue: () => Promise<any>;
export declare const debug: DebugAPI;
export declare const fireEvent: FireEventAPI;
export declare const waitForElement: WaitForElementFunction;
