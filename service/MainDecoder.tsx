import data from '../test_data/localMain.json';

//Note that --resolveJsonModule is true in tsconfig. As such data already extracts data
//indexing data to any to avoid declaring and setting an interface
const MainDecoder = (objName: string) => {
  return (data as any)[objName];
};

export default MainDecoder;