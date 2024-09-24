import React from 'react';
import { FaSearch, FaSort } from 'react-icons/fa';


const Driver = () => {
  const data = [
    { name: 'John Doe', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Smith', AlertTriggered: '2 mins ago', status: 'Active', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'Emily Davis', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Doe', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Smith', AlertTriggered: '2 mins ago', status: 'Active', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ];

  return (
    <div className="p-4">
      <div className="p-6 text-white bg-medium-green  rounded-2xl">
        <div className="flex items-center justify-between p-4 mb-6">
          <h1 className="text-2xl font-bold">Alerts and Warnings</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
            </div>
            <button className="flex items-center px-4 py-2 text-white transition duration-200 bg-gray-800 rounded-md hover:bg-gray-700">
              <FaSort className="mr-2" />
              Sort By
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-white bg-medium-green">
            <thead className="bg-medium-green">
              <tr>
                <th className="px-6 py-3 font-bold uppercase border-b border-gray-600">Name</th>
                <th className="px-6 py-3 font-bold uppercase border-b border-gray-600">Alert Triggered</th>
                <th className="px-6 py-3 font-bold uppercase border-b border-gray-600">Status</th>
                <th className="px-6 py-3 font-bold uppercase border-b border-gray-600">Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  <td className="px-6 py-4 border-b border-gray-700">{item.name}</td>
                  <td className="px-6 py-4 border-b border-gray-700">{item.AlertTriggered}</td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    <span
                      className={`py-1 px-2 rounded-full text-xs ${
                        item.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                      } text-white`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-700">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Driver;
