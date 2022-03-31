import React from "react"
import { render } from "@testing-library/react"
import { PlayerStatsForm } from "./player-stats-form";
import { IPlayerStats } from "../../shared/types";

function onSubmit(stats: IPlayerStats) {
   console.log(stats);
}

describe('Player Stats Form', () => {
   test("should populate all form inputs with 0", () => {
      const {getAllByRole} = render(<PlayerStatsForm onSubmit={onSubmit}/>);
      // "spinbutton" is the default aria role for input type=number
      const inputs = getAllByRole('spinbutton') as HTMLInputElement[]; // ref: https://www.w3.org/TR/html-aria/#el-input-number
      expect(inputs.length).toBe(5);
      inputs.forEach(input => {
         expect(input.value).toBe('0');
      });

   });

   test('should call onSubmit on form submit after clicking submit button', () => {
      const onSubmitSpy = jest.fn();
      const {getByRole} = render(<PlayerStatsForm onSubmit={onSubmitSpy}/>);
      const submitButton = getByRole('button');
      submitButton.click();
      expect(onSubmitSpy).toHaveBeenCalled();
   });
});
