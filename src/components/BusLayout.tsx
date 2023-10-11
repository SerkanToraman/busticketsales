import React from "react";
import bus_data from "../data/bus_data.json";
import female from "../../public/female.png";

function BusLayout() {
  const seatStatus = bus_data.bus;
  return (
    <div className="plane">
      <div className="cockpit">
        <div className="steeringclass">
          <img
            className="steering"
            src="https://cdn4.iconfinder.com/data/icons/automotive-glyph/64/automotive_vehicle-18-512.png"
          />
        </div>
        <div className="exit_front"></div>
      </div>

      <ol className="cabin fuselage">
        <li className="row row--1">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="1" disabled={seatStatus[1] !== 0} />
              <label for="1">1</label>
              {seatStatus["1"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["1"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="2" disabled={seatStatus[2] !== 0} />
              <label for="2">2</label>
              {seatStatus["2"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["2"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="3" disabled={seatStatus[3] !== 0} />
              <label for="3">3</label>
              {seatStatus["3"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["3"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="4" disabled={seatStatus[4] !== 0} />
              <label for="4">4</label>
              {seatStatus["4"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["4"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--2">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="5" disabled={seatStatus[5] !== 0} />
              <label for="5">5</label>
              {seatStatus["5"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["5"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="6" disabled={seatStatus[6] !== 0} />
              <label for="6">6</label>
              {seatStatus["6"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["6"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="7" disabled={seatStatus[7] !== 0} />
              <label for="7">7</label>
              {seatStatus["7"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["7"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="8" disabled={seatStatus[8] !== 0} />
              <label for="8">8</label>
              {seatStatus["8"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["8"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--3">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="9" disabled={seatStatus[9] !== 0} />
              <label for="9">9</label>
              {seatStatus["9"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["9"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="10" disabled={seatStatus[10] !== 0} />
              <label for="10">10</label>
              {seatStatus["10"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["10"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="11" disabled={seatStatus[11] !== 0} />
              <label for="11">11</label>
              {seatStatus["11"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["11"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="12" disabled={seatStatus[12] !== 0} />
              <label for="12">12</label>
              {seatStatus["12"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["12"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--4">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="13" disabled={seatStatus[13] !== 0} />
              <label for="13">13</label>
              {seatStatus["13"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["13"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="14" disabled={seatStatus[14] !== 0} />
              <label for="14">14</label>
              {seatStatus["14"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["14"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="15" disabled={seatStatus[15] !== 0} />
              <label for="15">15</label>
              {seatStatus["15"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["15"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="16" disabled={seatStatus[16] !== 0} />
              <label for="16">16</label>
              {seatStatus["16"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["16"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--5">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="17" disabled={seatStatus[17] !== 0} />
              <label for="17">17</label>
              {seatStatus["17"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["17"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="18" disabled={seatStatus[18] !== 0} />
              <label for="18">18</label>
              {seatStatus["18"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["18"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="19" disabled={seatStatus[19] !== 0} />
              <label for="19">19</label>
              {seatStatus["19"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["19"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="20" disabled={seatStatus[20] !== 0} />
              <label for="20">20</label>
              {seatStatus["20"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["20"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--6">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="21" disabled={seatStatus[21] !== 0} />
              <label for="21">21</label>
              {seatStatus["21"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["21"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="22" disabled={seatStatus[22] !== 0} />
              <label for="22">22</label>
              {seatStatus["22"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["22"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <div className="exit_middle"></div>
          </ol>
        </li>
        <li className="row row--7">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="23" disabled={seatStatus[23] !== 0} />
              <label for="23">23</label>
              {seatStatus["23"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["23"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="24" disabled={seatStatus[24] !== 0} />
              <label for="24">24</label>
              {seatStatus["24"] === 1 && (
                <img className="seat-image" src="/female.png" alt="Male" />
              )}
              {seatStatus["24"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="25" disabled={seatStatus[25] !== 0} />
              <label for="25">25</label>
              {seatStatus["25"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["25"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="26" disabled={seatStatus[26] !== 0} />
              <label for="26">26</label>
              {seatStatus["26"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["26"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--8">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="27" disabled={seatStatus[27] !== 0} />
              <label for="27">27</label>
              {seatStatus["27"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["27"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="28" disabled={seatStatus[28] !== 0} />
              <label for="28">28</label>
              {seatStatus["28"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["28"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="29" disabled={seatStatus[29] !== 0} />
              <label for="29">29</label>
              {seatStatus["29"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["29"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="30" disabled={seatStatus[30] !== 0} />
              <label for="30">30</label>
              {seatStatus["30"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["30"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--9">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="31" disabled={seatStatus[31] !== 0} />
              <label for="31">31</label>
              {seatStatus["31"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["31"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="32" disabled={seatStatus[32] !== 0} />
              <label for="32">32</label>
              {seatStatus["32"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["32"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="33" disabled={seatStatus[33] !== 0} />
              <label for="33">33</label>
              {seatStatus["33"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["33"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="34" disabled={seatStatus[34] !== 0} />
              <label for="34">34</label>
              {seatStatus["34"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["34"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--10">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="35" disabled={seatStatus[35] !== 0} />
              <label for="35">35</label>
              {seatStatus["35"] === 1 && (
                <img className="seat-image" src="/female.png" alt="Male" />
              )}
              {seatStatus["35"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="36" disabled={seatStatus[36] !== 0} />
              <label for="36">36</label>
              {seatStatus["36"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["36"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="37" disabled={seatStatus[37] !== 0} />
              <label for="37">37</label>
              {seatStatus["37"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["37"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="38" disabled={seatStatus[38] !== 0} />
              <label for="38">38</label>
              {seatStatus["38"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["38"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--11">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="39" disabled={seatStatus[39] !== 0} />
              <label for="39">39</label>
              {seatStatus["39"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["39"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="40" disabled={seatStatus[40] !== 0} />
              <label for="40">40</label>
              {seatStatus["40"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["40"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="41" disabled={seatStatus[41] !== 0} />
              <label for="41">41</label>
              {seatStatus["41"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["41"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="42" disabled={seatStatus[42] !== 0} />
              <label for="42">42</label>
              {seatStatus["42"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["42"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--12">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="43" disabled={seatStatus[43] !== 0} />
              <label for="43">43</label>
              {seatStatus["43"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["43"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="44" disabled={seatStatus[44] !== 0} />
              <label for="44">44</label>
              {seatStatus["44"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["44"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="45" disabled={seatStatus[45] !== 0} />
              <label for="45">45</label>
              {seatStatus["45"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["45"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="46" disabled={seatStatus[46] !== 0} />
              <label for="46">46</label>
              {seatStatus["46"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["46"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--13">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="47" disabled={seatStatus[47] !== 0} />
              <label for="47">47</label>
              {seatStatus["47"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["47"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="48" disabled={seatStatus[48] !== 0} />
              <label for="48">48</label>
              {seatStatus["48"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["48"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="49" disabled={seatStatus[49] !== 0} />
              <label for="49">49</label>
              {seatStatus["49"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["49"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="50" disabled={seatStatus[50] !== 0} />
              <label for="50">50</label>
              {seatStatus["50"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["50"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
        <li className="row row--14">
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id="51" disabled={seatStatus[51] !== 0} />
              <label for="38">51</label>
              {seatStatus["51"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["51"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="52" disabled={seatStatus[52] !== 0} />
              <label for="52">52</label>
              {seatStatus["52"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["52"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="53" disabled={seatStatus[53] !== 0} />
              <label for="53">53</label>
              {seatStatus["53"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["53"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input type="checkbox" id="54" disabled={seatStatus[54] !== 0} />
              <label for="54">54</label>
              {seatStatus["54"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["54"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default BusLayout;
