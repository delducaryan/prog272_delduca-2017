import ReactDOM from "react-dom";
import React from "react";
import DataMaven from "../components/DataMaven";
import { shallow } from "enzyme";
import ElfDebugEnzyme from "../../ElfDebugEnzyme";

const elfTestDebug = new ElfDebugEnzyme(true, "DataMaven.test.js");

jest.mock('whatwg-fetch');

beforeEach(function() {
    const localStorageMock = (function() {
        let storage = {};
        return {
            getItem: function(key) {
                return storage[key];
            },
            setItem: function(key, value) {
                storage[key] = value.toString();
            },
            clear: function() {
                storage = {};
            }
        };
    })();
    Object.defineProperty(global, 'localStorage', {value: localStorageMock});

});

describe("DataMaven Suite", function()
{
   it("renders DataMaven component without crashing", () =>
   {
       const div = document.createElement('div');
       ReactDOM.render(<DataMaven />, div);
   });

   it("renders and displays a Router", () =>
   {
       const wrapper = shallow(<DataMaven />);
       elfTestDebug.getAll(wrapper, "Router");
       var router = wrapper.find("BrowserRouter");
       expect(router.length).toEqual(1);
   });

   it("renders and displays at least one Route", () =>
   {
       const wrapper = shallow(<DataMaven />);
       elfTestDebug.getAll(wrapper, "Router");
       var router = wrapper.find("Route");
       expect(router.length).toBeGreaterThan(0);
   });
});