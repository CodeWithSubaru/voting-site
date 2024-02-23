import { NavLink } from "react-router-dom";
import Logo from "../../components/logo";
import Layout from "../layout/page";
import Divider from "../../components/divider";
import Posts from "../../components/posts";
import Switch from "../../components/switch";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-full">
      <div className="flex justify-between items-center p-5">
        <Logo />
        <div className="outline outline-gray-300 rounded-full w-8 h-8"></div>
      </div>

      <Layout>
        <div className="col-span-1 text-sm text-gray-400 tracking-wider">
          <NavLink
            to="/"
            className="flex px-4 py-3 font-bold text-gray-600 bg-gray-200 transition-all duration-300 w-1/2 rounded"
          >
            My pickles
          </NavLink>
          <Divider />
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className="px-4 py-3 w-1/2 rounded font-medium hover:bg-gray-200 transition-all duration-300"
            >
              Browse
            </NavLink>
            <NavLink
              to="/"
              className="px-4 py-3 w-1/2 rounded font-medium hover:bg-gray-200 transition-all duration-300"
            >
              My group 1
            </NavLink>
            <NavLink
              to="/"
              className="px-4 py-3 w-1/2 rounded font-medium hover:bg-gray-200 transition-all duration-300"
            >
              Group 2
            </NavLink>
            <div className="px-4 py-3 w-1/2 rounded font-medium hover:bg-gray-200 transition-all duration-300">
              New Group
            </div>

            <Divider />

            <div className="max-w-48 columns-3 space-y-3 text-xs">
              <p className="bg-gray-200 rounded-full px-2 w-fit">#Hsdas</p>
              <p className="bg-gray-200 rounded-full px-2 w-fit">#Hsdas</p>
              <p className="bg-gray-200 rounded-full px-2 w-fit">#Hsdas</p>
              <p className="bg-gray-200 rounded-full px-2 w-fit">#dsdHsdas</p>
              <p className="bg-gray-200 rounded-full px-2 w-fit">
                #Hdsadsadsadassdas
              </p>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="flex justify-between items-center space-y-2">
            <h2 className="text-2xl font-bold">@stanly</h2>
            <button
              style={{ background: "var(--primary)" }}
              className="text-white text-xs px-4 py-2 rounded tracking-wider"
            >
              Add Pickle
            </button>
          </div>
          <p className="text-sm text-gray-700">
            Private group from
            <strong className="ms-1 -me-1 relative">
              @stanly
              <span className="before:bg-[var(--primary)] before:inline-block before:top-4 before:left-0 before:w-10 before:h-1 before:absolute text-white p-1"></span>
            </strong>
            group
          </p>
          <small className="inline-block mb-10 text-gray-500">61 Members</small>
          <div className="flex justify-between text-center">
            <div className="flex">
              <Switch>Newest</Switch>
              <Switch variant="muted">Popular</Switch>
            </div>
            <small className="leading-8 flex gap-x-1 items-center">
              <input type="checkbox" name="vote" id="vote" className="" />
              <label htmlFor="vote"> Hide Voted</label>
            </small>
          </div>
          <Divider variant="100" />
          <Posts />
          <Divider variant="100" />
        </div>
      </Layout>
    </div>
  );
};
export default Home;
