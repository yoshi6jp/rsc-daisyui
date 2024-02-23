import { classed } from "../classed.config";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../select";

export const JoinButton = classed("button", "join-item", Button);
JoinButton.displayName = "JoinButton";

export const JoinInput = classed("input", "join-item", Input);
JoinInput.displayName = "JoinInput";
export const JoinSelect = classed("select", "join-item", Select);
JoinSelect.displayName = "JoinSelect";
