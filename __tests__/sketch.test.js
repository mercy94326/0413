const { render, screen } = require('@testing-library/react');
const Sketch = require('../path/to/your/SketchComponent');

test('renders canvas correctly', () => {
	render(<Sketch />);
	const canvasElement = screen.getByRole('canvas');
	expect(canvasElement).toBeInTheDocument();
});

test('interacts with canvas', () => {
	render(<Sketch />);
	const canvasElement = screen.getByRole('canvas');
	canvasElement.click();
	expect(canvasElement).toHaveAttribute('data-interacted', 'true');
});