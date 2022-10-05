import type { NextPage } from 'next';
import type { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';

export type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
  auth: boolean
};

export type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> & Partial<NextPageWithAuth>;

export type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithAuth
};