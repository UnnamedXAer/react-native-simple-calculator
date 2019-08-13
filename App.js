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
			equision: ""
		}
	}

	buttonPresHandler = (ev, arg) => {
		switch (arg) {
			case '=':
				const result = eval(String(this.state.equision).replace(",", "."));
				this.setState({result: result});
				break;
			case 'C':
				this.setState({result: 0, equision: ""});
				break;
			default:
				const equision = this.state.equision + arg;
				this.setState({equision: equision})
				break;
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
							<TouchableOpacity style={styles.button} onPress={(ev) => this.buttonPresHandler(ev, 0)}>
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
		flex: 2
	},
	equisionText: {
		fontSize: 25
	},
	resultView: {
		backgroundColor: "darkblue",
		padding: 25,
		flex: 1
	},
	resultText: {
		color: "white",
		fontSize: 25
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
