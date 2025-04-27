import { render, fireEvent } from "@testing-library/react";
import TaskForm from "../src/components/TaskForm";
import { vi } from "vitest";

describe("TaskForm", () => {
  it("should call onTaskCreated after form submit", async () => {
    const onTaskCreated = vi.fn();
    const { getByPlaceholderText, getByText } = render(<TaskForm onTaskCreated={onTaskCreated} />);

    fireEvent.change(getByPlaceholderText(/Title/i), { target: { value: "Test Task" } });
    fireEvent.change(getByPlaceholderText(/Description/i), { target: { value: "Test Description" } });
    fireEvent.change(getByPlaceholderText(/Due Date/i), { target: { value: "2025-05-01T12:00" } });

    fireEvent.click(getByText(/Create Task/i));
    expect(onTaskCreated).toHaveBeenCalled();
  });
});
