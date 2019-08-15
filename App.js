import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			result: 0,
			equision: "0"
		}
	}

	buttonPresHandler = (ev, arg) => {
		let equision = this.state.equision;
		switch (arg) {
			case '=':
				const result = eval(String(this.state.equision).replace(",", "."));
				this.setState({result: result});
				break;
			case 'C':
				this.setState({result: 0, equision: "0"});
				break;
			case ',':
				const marks = ["+", "-", "*", "/"];

				let lastIndexOfMark = -2;
				marks.forEach(x => {
					const currLastIndex = equision.lastIndexOf(x);
					if (currLastIndex > -1 && lastIndexOfMark < currLastIndex) {
						lastIndexOfMark = currLastIndex;
					}
				});
				const lastIndexOfComma = equision.lastIndexOf(',');

				if (lastIndexOfComma < 0 || lastIndexOfComma < lastIndexOfMark) {
					if (marks.indexOf(equision.substring(equision.length-1)) >= 0) {
						equision += "0";
					}
					equision += arg;
				}
				break;
			default:
				const isArgMark = isNaN(parseInt(arg, 10));
				if (isArgMark) {
					if (!isNaN(parseInt(equision.substring(equision.length-1), 10))) {
						// when last char in equision is number then add mark.
						equision += arg;
					}
					else {
						// when last char is mark then replace it with new one.
						equision = equision.substring(0, equision.length-1) + arg;
					}
				}
				else {
					// arg is number

					if (equision == "0") {
						// when equision == "0" repalace it with arg
						equision = arg;							
					}
					else {
						equision += arg;
					}
				}
				break;
			}
		if (this.state.equision != equision) {
			this.setState({equision: equision});
		}
	}

	render() {
		return (
			<View style={styles.main}>
				<View style={styles.equisionView}>
					<Text style={styles.equisionText}>{this.state.equision}</Text>
				</View>
				<View style={styles.resultView} >
					<Text style={styles.resultText}>{this.state.result}</Text>
				</View>
				<View style={styles.buttonsView}>
					<View style={styles.digitsView} >
						<View style={styles.buttonsRow}>
							<TouchableOpacity style={styles.button} onPress={(ev) => (ev) => this.buttonPresHandler(ev, "7")}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "8")}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "9")}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
						</View>
						<View style={styles.buttonsRow}>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "4")}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "5")}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "6")}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
						</View>
						<View style={styles.buttonsRow}>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "1")}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "2")}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "3")}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
						</View>
						<View style={styles.buttonsRow}>
							<TouchableOpacity style={[styles.button, {backgroundColor: "#0fba6a"}]} onPress={(ev) => this.buttonPresHandler(ev, ",")}>
								<Text style={styles.buttonText}>,</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "0")}>
								<Text style={styles.buttonText}>0</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.button, {backgroundColor: "#0fba6a"}]} onPress={(ev) => this.buttonPresHandler(ev, "=")}>
								<Text style={styles.buttonText}>=</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.marksView}>
						<TouchableOpacity style={[styles.button, {backgroundColor: "#c2a606"}]} onPress={(ev) => this.buttonPresHandler(ev, "C")}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "/")}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "*")}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "-")}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, "+")}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
					</View>
				</View>
			</View>
		)
	};
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: 'orangered',
		flex: 1,
		display: 'flex',
		flexDirection: 'column'
	},
	equisionView: {
		padding: 25,
		flex: 2,
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end"
	},
	equisionText: {
		fontSize: 40
	},
	resultView: {
		backgroundColor: "darkblue",
		padding: 25,
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end"
	},
	resultText: {
		color: "white",
		fontSize: 30
	},
	buttonsView: {
		backgroundColor: "#d6ab1f",
		display: "flex",
		flexDirection: "row",
		flex: 7
	},
	digitsView: {
		backgroundColor: "#1fd681",
		display: "flex",
		flex: 3,
		justifyContent: 'space-around',
		alignItems: 'stretch'
	},
	marksView: {
		backgroundColor: "#ffda05",
		display: "flex",
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: "stretch",
	},
	buttonsRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'stretch',
		flex: 4
	},
	button: {
		height: "100%",
		display: "flex",
		borderColor: "black",
		borderStyle: "solid",
		borderWidth: 1,
		flex: 3,
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		fontSize: 30
	}
});

export default App;
