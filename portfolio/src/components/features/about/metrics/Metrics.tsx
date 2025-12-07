import { Metricas, Data } from "./MetricsStyle"
import GradientText from "../../../animations/GradientText"
const Metrics = () => {
    return (
        <Metricas>
            <Data>
                <GradientText
                    colors={["#15082e", "#3b155c", "#210e43", "#1c024f", "#130a24"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="metrics"
                >
                    2+
                </GradientText>
                <p>Anos de Experiência</p>
            </Data>
            <Data>
                <GradientText
                    colors={["#15082e", "#3b155c", "#210e43", "#1c024f", "#130a24"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="metrics"
                >
                    30+
                </GradientText>
                <p>Projetos Feitos</p>
            </Data>
            <Data>
                <GradientText
                    colors={["#15082e", "#3b155c", "#210e43", "#1c024f", "#130a24"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="metrics"
                >
                    1300+
                </GradientText>
                <p>Commits no GitHub</p>
            </Data>
        </Metricas>
    )
}

export default Metrics