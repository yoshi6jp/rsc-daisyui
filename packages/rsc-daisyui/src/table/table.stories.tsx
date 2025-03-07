import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Avatar, Badge, Button, Checkbox, Mask } from "..";
import { Table } from ".";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  argTypes: toArgTypes(getVariantConfig(Table)),
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <div className="overflow-x-auto">
      <Table {...args}>
        {/* head */}
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const ActiveRow: Story = {
  render: (args) => (
    <div className="overflow-x-auto">
      <Table {...args}>
        {/* head */}
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const HighlightsOnHover: Story = {
  render: (args) => (
    <div className="overflow-x-auto">
      <Table {...args}>
        {/* head */}
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr className="hover:bg-base-300">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const Zebra: Story = {
  args: {
    zebra: true,
  },
  render: (args) => (
    <div className="overflow-x-auto">
      <Table {...args}>
        {/* head */}
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};
export const VisualElements: Story = {
  render: (args) => (
    <div className="overflow-x-auto">
      <Table {...args}>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                {/* eslint-disable-next-line: jsx-a11y/label-has-associated-control */}
                <Checkbox />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                {/* eslint-disable-next-line: jsx-a11y/label-has-associated-control */}
                <Checkbox />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <Avatar>
                  <Mask as="div" className="w-12 h-12" shape="squircle">
                    <img
                      alt="Avatar Tailwind CSS Component"
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    />
                  </Mask>
                </Avatar>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <Badge ghost={true} size="sm">
                Desktop Support Technician
              </Badge>
            </td>
            <td>Purple</td>
            <th>
              <Button ghost={true} size="xs">
                details
              </Button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                {/* eslint-disable-next-line: jsx-a11y/label-has-associated-control */}
                <Checkbox />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <Avatar className="avatar">
                  <Mask as="div" className="w-12 h-12" shape="squircle">
                    <img
                      alt="Avatar Tailwind CSS Component"
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    />
                  </Mask>
                </Avatar>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <Badge ghost={true} size="xs">
                Tax Accountant
              </Badge>
            </td>
            <td>Red</td>
            <th>
              <Button ghost={true} size="xs">
                details
              </Button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <label>
                {/* eslint-disable-next-line: jsx-a11y/label-has-associated-control */}
                <Checkbox />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <Avatar>
                  <Mask as="div" className="w-12 h-12" shape="squircle">
                    <img
                      alt="Avatar Tailwind CSS Component"
                      src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                    />
                  </Mask>
                </Avatar>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <Badge ghost={true} size="sm">
                Office Assistant I
              </Badge>
            </td>
            <td>Crimson</td>
            <th>
              <Button ghost={true} size="xs">
                details
              </Button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <th>
              <label>
                {/* eslint-disable-next-line: jsx-a11y/label-has-associated-control */}
                <Checkbox />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <Avatar>
                  <Mask as="div" className="w-12 h-12" shape="squircle">
                    <img
                      alt="Avatar Tailwind CSS Component"
                      src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                    />
                  </Mask>
                </Avatar>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <Badge ghost={true} size="sm">
                Community Outreach Specialist
              </Badge>
            </td>
            <td>Indigo</td>
            <th>
              <Button ghost={true} size="xs">
                details
              </Button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th />
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
};

export const TableXs: Story = {
  args: {
    size: "xs",
  },
  render: (args) => (
    <div className="overflow-x-auto">
      <Table {...args}>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td>Red</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
            <td>3/25/2021</td>
            <td>Crimson</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
            <td>5/22/2020</td>
            <td>Indigo</td>
          </tr>
          <tr>
            <th>6</th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
            <td>12/8/2020</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>7</th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
            <td>2/17/2021</td>
            <td>Yellow</td>
          </tr>
          <tr>
            <th>8</th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>O&apos;Hara, Welch and Keebler</td>
            <td>Indonesia</td>
            <td>5/23/2020</td>
            <td>Crimson</td>
          </tr>
          <tr>
            <th>9</th>
            <td>Lesya Tinham</td>
            <td>Safety Technician IV</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
            <td>2/21/2021</td>
            <td>Maroon</td>
          </tr>
          <tr>
            <th>10</th>
            <td>Zaneta Tewkesbury</td>
            <td>VP Marketing</td>
            <td>Sauer LLC</td>
            <td>Chad</td>
            <td>6/23/2020</td>
            <td>Green</td>
          </tr>
          <tr>
            <th>11</th>
            <td>Andy Tipple</td>
            <td>Librarian</td>
            <td>Hilpert Group</td>
            <td>Poland</td>
            <td>7/9/2020</td>
            <td>Indigo</td>
          </tr>
          <tr>
            <th>12</th>
            <td>Sophi Biles</td>
            <td>Recruiting Manager</td>
            <td>Gutmann Inc</td>
            <td>Indonesia</td>
            <td>2/12/2021</td>
            <td>Maroon</td>
          </tr>
          <tr>
            <th>13</th>
            <td>Florida Garces</td>
            <td>Web Developer IV</td>
            <td>Gaylord, Pacocha and Baumbach</td>
            <td>Poland</td>
            <td>5/31/2020</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>14</th>
            <td>Maribeth Popping</td>
            <td>Analyst Programmer</td>
            <td>Deckow-Pouros</td>
            <td>Portugal</td>
            <td>4/27/2021</td>
            <td>Aquamarine</td>
          </tr>
          <tr>
            <th>15</th>
            <td>Moritz Dryburgh</td>
            <td>Dental Hygienist</td>
            <td>Schiller, Cole and Hackett</td>
            <td>Sri Lanka</td>
            <td>8/8/2020</td>
            <td>Crimson</td>
          </tr>
          <tr>
            <th>16</th>
            <td>Reid Semiras</td>
            <td>Teacher</td>
            <td>Sporer, Sipes and Rogahn</td>
            <td>Poland</td>
            <td>7/30/2020</td>
            <td>Green</td>
          </tr>
          <tr>
            <th>17</th>
            <td>Alec Lethby</td>
            <td>Teacher</td>
            <td>Reichel, Glover and Hamill</td>
            <td>China</td>
            <td>2/28/2021</td>
            <td>Khaki</td>
          </tr>
          <tr>
            <th>18</th>
            <td>Aland Wilber</td>
            <td>Quality Control Specialist</td>
            <td>Kshlerin, Rogahn and Swaniawski</td>
            <td>Czech Republic</td>
            <td>9/29/2020</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>19</th>
            <td>Teddie Duerden</td>
            <td>Staff Accountant III</td>
            <td>Pouros, Ullrich and Windler</td>
            <td>France</td>
            <td>10/27/2020</td>
            <td>Aquamarine</td>
          </tr>
          <tr>
            <th>20</th>
            <td>Lorelei Blackstone</td>
            <td>Data Coordiator</td>
            <td>Witting, Kutch and Greenfelder</td>
            <td>Kazakhstan</td>
            <td>6/3/2020</td>
            <td>Red</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th />
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
};

export const PinnedRows: Story = {
  args: {
    pinRows: true,
  },
  render: (args) => (
    <div className="overflow-x-auto h-96">
      <Table {...args}>
        <thead>
          <tr>
            <th>A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ant-Man</td>
          </tr>
          <tr>
            <td>Aquaman</td>
          </tr>
          <tr>
            <td>Asterix</td>
          </tr>
          <tr>
            <td>The Atom</td>
          </tr>
          <tr>
            <td>The Avengers</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Batgirl</td>
          </tr>
          <tr>
            <td>Batman</td>
          </tr>
          <tr>
            <td>Batwoman</td>
          </tr>
          <tr>
            <td>Black Canary</td>
          </tr>
          <tr>
            <td>Black Panther</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Captain America</td>
          </tr>
          <tr>
            <td>Captain Marvel</td>
          </tr>
          <tr>
            <td>Catwoman</td>
          </tr>
          <tr>
            <td>Conan the Barbarian</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daredevil</td>
          </tr>
          <tr>
            <td>The Defenders</td>
          </tr>
          <tr>
            <td>Doc Savage</td>
          </tr>
          <tr>
            <td>Doctor Strange</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elektra</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fantastic Four</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>G</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ghost Rider</td>
          </tr>
          <tr>
            <td>Green Arrow</td>
          </tr>
          <tr>
            <td>Green Lantern</td>
          </tr>
          <tr>
            <td>Guardians of the Galaxy</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>H</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hawkeye</td>
          </tr>
          <tr>
            <td>Hellboy</td>
          </tr>
          <tr>
            <td>Incredible Hulk</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>I</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iron Fist</td>
          </tr>
          <tr>
            <td>Iron Man</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>M</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Marvelman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>R</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robin</td>
          </tr>
          <tr>
            <td>The Rocketeer</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Shadow</td>
          </tr>
          <tr>
            <td>Spider-Man</td>
          </tr>
          <tr>
            <td>Sub-Mariner</td>
          </tr>
          <tr>
            <td>Supergirl</td>
          </tr>
          <tr>
            <td>Superman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>T</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teenage Mutant Ninja Turtles</td>
          </tr>
          <tr>
            <td>Thor</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>W</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Wasp</td>
          </tr>
          <tr>
            <td>Watchmen</td>
          </tr>
          <tr>
            <td>Wolverine</td>
          </tr>
          <tr>
            <td>Wonder Woman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X-Men</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Z</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zatanna</td>
          </tr>
          <tr>
            <td>Zatara</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const PinnedRowsAndPinnedCols: Story = {
  args: {
    pinRows: true,
    pinCols: true,
    size: "xs",
  },
  render: (args) => (
    <div className="overflow-x-auto h-96 w-96">
      <Table {...args}>
        <thead>
          <tr>
            <th />
            <td>Name</td>
            <td>Job</td>
            <td>company</td>
            <td>location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <th>1</th>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td>Purple</td>
            <th>2</th>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td>Red</td>
            <th>3</th>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
            <td>3/25/2021</td>
            <td>Crimson</td>
            <th>4</th>
          </tr>
          <tr>
            <th>5</th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
            <td>5/22/2020</td>
            <td>Indigo</td>
            <th>5</th>
          </tr>
          <tr>
            <th>6</th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
            <td>12/8/2020</td>
            <td>Purple</td>
            <th>6</th>
          </tr>
          <tr>
            <th>7</th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
            <td>2/17/2021</td>
            <td>Yellow</td>
            <th>7</th>
          </tr>
          <tr>
            <th>8</th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>O&pos;Hara, Welch and Keebler</td>
            <td>Indonesia</td>
            <td>5/23/2020</td>
            <td>Crimson</td>
            <th>8</th>
          </tr>
          <tr>
            <th>9</th>
            <td>Lesya Tinham</td>
            <td>Safety Technician IV</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
            <td>2/21/2021</td>
            <td>Maroon</td>
            <th>9</th>
          </tr>
          <tr>
            <th>10</th>
            <td>Zaneta Tewkesbury</td>
            <td>VP Marketing</td>
            <td>Sauer LLC</td>
            <td>Chad</td>
            <td>6/23/2020</td>
            <td>Green</td>
            <th>10</th>
          </tr>
          <tr>
            <th>11</th>
            <td>Andy Tipple</td>
            <td>Librarian</td>
            <td>Hilpert Group</td>
            <td>Poland</td>
            <td>7/9/2020</td>
            <td>Indigo</td>
            <th>11</th>
          </tr>
          <tr>
            <th>12</th>
            <td>Sophi Biles</td>
            <td>Recruiting Manager</td>
            <td>Gutmann Inc</td>
            <td>Indonesia</td>
            <td>2/12/2021</td>
            <td>Maroon</td>
            <th>12</th>
          </tr>
          <tr>
            <th>13</th>
            <td>Florida Garces</td>
            <td>Web Developer IV</td>
            <td>Gaylord, Pacocha and Baumbach</td>
            <td>Poland</td>
            <td>5/31/2020</td>
            <td>Purple</td>
            <th>13</th>
          </tr>
          <tr>
            <th>14</th>
            <td>Maribeth Popping</td>
            <td>Analyst Programmer</td>
            <td>Deckow-Pouros</td>
            <td>Portugal</td>
            <td>4/27/2021</td>
            <td>Aquamarine</td>
            <th>14</th>
          </tr>
          <tr>
            <th>15</th>
            <td>Moritz Dryburgh</td>
            <td>Dental Hygienist</td>
            <td>Schiller, Cole and Hackett</td>
            <td>Sri Lanka</td>
            <td>8/8/2020</td>
            <td>Crimson</td>
            <th>15</th>
          </tr>
          <tr>
            <th>16</th>
            <td>Reid Semiras</td>
            <td>Teacher</td>
            <td>Sporer, Sipes and Rogahn</td>
            <td>Poland</td>
            <td>7/30/2020</td>
            <td>Green</td>
            <th>16</th>
          </tr>
          <tr>
            <th>17</th>
            <td>Alec Lethby</td>
            <td>Teacher</td>
            <td>Reichel, Glover and Hamill</td>
            <td>China</td>
            <td>2/28/2021</td>
            <td>Khaki</td>
            <th>17</th>
          </tr>
          <tr>
            <th>18</th>
            <td>Aland Wilber</td>
            <td>Quality Control Specialist</td>
            <td>Kshlerin, Rogahn and Swaniawski</td>
            <td>Czech Republic</td>
            <td>9/29/2020</td>
            <td>Purple</td>
            <th>18</th>
          </tr>
          <tr>
            <th>19</th>
            <td>Teddie Duerden</td>
            <td>Staff Accountant III</td>
            <td>Pouros, Ullrich and Windler</td>
            <td>France</td>
            <td>10/27/2020</td>
            <td>Aquamarine</td>
            <th>19</th>
          </tr>
          <tr>
            <th>20</th>
            <td>Lorelei Blackstone</td>
            <td>Data Coordinator</td>
            <td>Witting, Kutch and Greenfelder</td>
            <td>Kazakhstan</td>
            <td>6/3/2020</td>
            <td>Red</td>
            <th>20</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th />
            <td>Name</td>
            <td>Job</td>
            <td>company</td>
            <td>location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th />
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
};
