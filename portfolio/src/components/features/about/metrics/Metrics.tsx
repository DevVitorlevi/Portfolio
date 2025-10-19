import { Metricas, Data } from "./MetricsStyle"
import GradientText from "../../../animations/GradientText"
const Metrics = () => {
    return (
        <Metricas>
            <Data>
                <GradientText
                  colors={["#581dc5", "#4079ff", "#581dc5", "#4079ff", "#581dc5"]}
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
                  colors={["#581dc5", "#4079ff", "#581dc5", "#4079ff", "#581dc5"]}
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
                  colors={["#581dc5", "#4079ff", "#581dc5", "#4079ff", "#581dc5"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="metrics"
                >
                        1200+
                </GradientText>
                <p>Commits no GitHub</p>
            </Data>
        </Metricas>
    )
}

export default Metrics