declare var module: any;
// declare var require: any;
declare var __webpack_public_path__ : string;

declare namespace process{
	export namespace env{
		export const NODE_ENV:string;
	}
}
declare module "react-hot-loader";

declare var require: {
    (path: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};