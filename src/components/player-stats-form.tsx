// react form that allows the user to input their Str, Dex, Int, Fai, and Arc stats (numbers up to 99)
import React, { useState } from 'react';
import { IPlayerStats } from "../shared/types";

export interface PlayerStatsFormProps {
  onSubmit: (stats: IPlayerStats) => void;
}

export const PlayerStatsForm = ({onSubmit}: PlayerStatsFormProps) => {
  const [stats, setStats] = useState<IPlayerStats>({
    Str: 0,
    Dex: 0,
    Int: 0,
    Fai: 0,
    Arc: 0
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(stats);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStats({
      ...stats,
      [name]: parseInt(value)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="str">Strength</label>
        <input
          type="number"
          name="Str"
          id="str"
          className="form-control"
          value={stats.Str}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dex">Dexterity</label>
        <input
          type="number"
          name="Dex"
          id="dex"
          className="form-control"
          value={stats.Dex}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="int">Intelligence</label>
        <input
          type="number"
          name="Int"
          id="int"
          className="form-control"
          value={stats.Int}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fai">Faith</label>
        <input
          type="number"
          name="Fai"
          id="fai"
          className="form-control"
          value={stats.Fai}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="arc">Arcane</label>
        <input
          type="number"
          name="Arc"
          id="arc"
          className="form-control"
          value={stats.Arc}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};
