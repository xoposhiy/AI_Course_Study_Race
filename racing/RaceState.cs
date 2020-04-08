using System;
using System.Collections.Generic;
using System.Linq;
using AiAlgorithms.Algorithms;

namespace AiAlgorithms.racing
{
    public class RaceState
    {
        public readonly RaceTrack Track;
        public readonly Car FirstCar;
        public readonly Car SecondCar;
        public readonly IReadOnlyCollection<Car> Cars;

        public RaceState(RaceTrack track, Car firstCar, Car secondCar)
        {
            Track = track;
            FirstCar = firstCar;
            SecondCar = secondCar;
            Cars = new List<Car> {FirstCar, SecondCar};
        }

        public int Time { get; private set; }
        public bool IsFinished => Time >= Track.RaceDuration || FirstCar.FlagsTaken >= Track.FlagsToTake;

        public RaceState MakeCopy()
        {
            return new RaceState(Track, FirstCar.MakeCopy(), SecondCar.MakeCopy()) {Time = Time};
        }

        public void Tick()
        {
            if (IsFinished) return;
            foreach (var car in Cars)
            {
                if (car.IsAlive)
                {
                    var initialPos = car.Pos;
                    car.Tick();
                    var finalPos = car.Pos;
                    if (CrashToObstacle(initialPos, finalPos, car.Radius))
                        car.IsAlive = false;
                    else
                        while (SegmentCrossPoint(initialPos, finalPos, GetFlagFor(car), car.Radius))
                            car.FlagsTaken++;
                }
            }
            Time++;
        }

        private bool CrashToObstacle(V a, V b, int carRadius)
        {
            return Track.Obstacles.Any(o => SegmentCrossPoint(a, b, o.Pos, o.Radius + carRadius));
        }

        private bool SegmentCrossPoint(V a, V b, V point, int crossDistance)
        {
            return DistPointToSegment(point, a, b) <= crossDistance;
        }

        private double DistPointToSegment(V p, V a, V b)
        {
            var cos1 = (b - a) * (p - a);
            var cos2 = (a - b) * (p - b);
            if (cos1 <= 0) return p.DistTo(a);
            if (cos2 <= 0) return p.DistTo(b);
            return Math.Abs(((b - a) ^ (p - a)) / a.DistTo(b));
        }

        public V GetFlagFor(Car car)
        {
            return Track.Flags[car.FlagsTaken % Track.Flags.Count];
        }

        public override string ToString()
        {
            return $"FirstCar: {FirstCar}, SecondCar: {SecondCar}, Time: {Time}, IsFinished: {IsFinished}";
        }
    }
}